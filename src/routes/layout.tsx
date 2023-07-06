import { Slot, component$, $, useSignal } from '@builder.io/qwik'
import { routeLoader$, useNavigate } from '@builder.io/qwik-city'
import { type InitialValues, type SubmitHandler, useForm, type FieldValues } from '@modular-forms/qwik'
import Footer from '~/components/footer'
import Header from '~/components/header'
import { globalFunctionMap } from '~/function-mapping'

interface FrontierHelperForm extends FieldValues {
  query: string
}

export const useFormLoader = routeLoader$<InitialValues<FrontierHelperForm>>(() => ({
  query: ''
}))

export default component$(() => {
  const loadPercentage = useSignal(100)
  const [frontierHelperForm, { Form, Field }] = useForm<FrontierHelperForm>({
    loader: useFormLoader()
  })
  const nav = useNavigate()
  const additionalFunctions = {
    navigate: $(async (arg: { url: string }) => { await nav(arg.url) })
  }
  const loadingResponse = useSignal(false)

  const handleSubmit: SubmitHandler<FrontierHelperForm> = $(async ({ query }) => {
    if (query.length !== 0) {
      console.log('Query:', query)

      loadingResponse.value = true
      loadPercentage.value = 1
      const loadIncrease = setInterval(() => {
        if (loadPercentage.value < 75) {
          loadPercentage.value += 0.5
        } else {
          clearInterval(loadIncrease)
        }
      }, 10)

      void fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      }).then((manhattanExpressResp) => {
        loadingResponse.value = false
        void manhattanExpressResp.json().then(({ resp }) => {
          if (resp.finish_reason === 'function_call') {
            loadPercentage.value = 99
            setTimeout(() => {
              loadPercentage.value = 100
            }, 400)

            const func: any = { ...globalFunctionMap, ...additionalFunctions }[resp.function.name as keyof typeof globalFunctionMap]
            if (typeof func === 'function') {
              func(JSON.parse(resp.function.args))
              void nav()
            } else {
              console.warn('No function found')
            }
          } else if (resp.finish_reason === 'stop') {
            console.log('stop')
            console.log(resp.message.content)
          } else {
            console.warn('No mapping for finish_reason')
          }
        })
      })
    }
  })

  return (
    <div class='flex flex-col h-screen'>
      <Header />
      <div class={`w-full ${loadPercentage.value !== 100 ? 'bg-gray-200' : 'bg-white'} h-1`}>
        {
          loadPercentage.value !== 100 && (
            <div class="bg-purple-800 h-1" style={`width: ${loadPercentage.value}%`}></div>
          )
        }
      </div>
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
