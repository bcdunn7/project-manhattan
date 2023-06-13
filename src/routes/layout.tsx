import { Slot, component$, $ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { InitialValues, SubmitHandler, useForm } from '@modular-forms/qwik';
import Footer from '~/components/footer';
import Header from '~/components/header';

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

  const handleSubmit: SubmitHandler<FrontierHelperForm> = $(({ query }) => {
    if (query.length) {
      console.log(query);
    }
  })

  return (
    <div class='flex flex-col h-screen'>
      <Header />
      <div class='mt-4 h-18 flex items-center'>
        <Form onSubmit$={handleSubmit} class='w-full flex justify-between   gap-4 mx-16'>
          <Field name='query' >
            {(field, props) => <input class='flex grow h-12 border rounded border-gray-700 px-4' {...props} type='text' />}
          </Field>
          <button class='border rounded w-20' type='submit' disabled={frontierHelperForm.submitting}>
            Go!
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
