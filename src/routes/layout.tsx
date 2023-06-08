import { Slot, component$, $ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { InitialValues, SubmitHandler, useForm } from "@modular-forms/qwik";
import Footer from "~/components/footer";
import Header from "~/components/header";

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
    console.log(query);
  })

  return (
    <div class='flex flex-col h-screen'>
      <Header />
      <div class='h-20'>
        <Form onSubmit$={handleSubmit}>
          <Field name='query'>
            {(field, props) => <input {...props} type='text' />}
          </Field>
          <button type='submit' disabled={frontierHelperForm.submitting}>
            Go!
          </button>
        </Form>
      </div>
      <div class='flex grow bg-blue-50'>
        <Slot />
      </div>
      <Footer />
    </div>
  )
})
