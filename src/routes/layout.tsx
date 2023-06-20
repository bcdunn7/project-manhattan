import { Slot, component$, $, useSignal } from '@builder.io/qwik';
import { routeLoader$, useNavigate } from '@builder.io/qwik-city';
import { InitialValues, SubmitHandler, useForm } from '@modular-forms/qwik';
import Footer from '~/components/footer';
import Header from '~/components/header';
import { globalFunctionMap } from '~/function-mapping';

type FrontierHelperForm = {
  query: string;
}

export const useFormLoader = routeLoader$<InitialValues<FrontierHelperForm>>(() => ({
  query: ''
}))

export default component$(() => {
  const [frontierHelperForm, { Form, Field }] = useForm<FrontierHelperForm>({
    loader: useFormLoader(),
  });
  const nav = useNavigate();
  const additionalFunctions = {
    navigate: $((arg: { url: string }) => nav(arg.url)),
  }
  const loadingResponse = useSignal(false);

  const handleSubmit: SubmitHandler<FrontierHelperForm> = $(async ({ query }) => {
    if (query.length) {
      console.log('Query:', query);

      loadingResponse.value = true;
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query }),
      }).then((manhattanExpressResp) => {
        loadingResponse.value = false;
        console.log('express resp', manhattanExpressResp);
        manhattanExpressResp.json().then(({ resp }) => {
          console.log('resp content', resp);

          if (resp.finish_reason === 'function_call') {
            console.log(`${resp.function.name}(${JSON.stringify(resp.function.args)})`)

            const func: Function = { ...globalFunctionMap, ...additionalFunctions }[resp.function.name as keyof typeof globalFunctionMap];
            console.log(func);
            if (func) {
              func(JSON.parse(resp.function.args));
              nav();
            } else {
              console.warn('No function found')
            }
          } else if (resp.finish_reason === 'stop') {
            console.log('stop')
            console.log(resp.message.content)
          } else {
            console.warn('No mapping for finish_reason')
          }
        });
      });
    }
  })

  // TODO: is this worth it? styling for focus/cmd+k; not done either way
  // useVisibleTask$(() => {
  //   window.addEventListener('keydown', (keydown) => {

  //     if (keydown.key?.toLowerCase() === 'k' && keydown.metaKey) {
  //       console.log(keydown);
  //       (document.querySelector('#formDiv') as HTMLElement).focus();
  //     }
  //   })
  // })

  return (
    <div class='flex flex-col h-screen'>
      <Header />
      <div id='formDiv' class='mt-4 h-18 flex items-center'>
        <Form autoComplete='off' onSubmit$={handleSubmit} class='w-full flex justify-between   gap-4 mx-16'>
          <Field name='query'>
            {(field, props) => <input class='flex grow h-12 border rounded border-purple-800 px-4' {...props} type='text' />}
          </Field>
          <button class='border rounded border-purple-800 w-20' type='submit' disabled={frontierHelperForm.submitting || loadingResponse.value}>
            {loadingResponse.value ? '...' : 'Go!'}
          </button>
        </Form>
      </div>
      <div class='flex grow'>
        <Slot />
      </div>
      <Footer />
    </div>
  )
})
