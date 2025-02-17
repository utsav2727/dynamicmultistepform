"use client"
import MultiStepForm from "./components/forms/MultiStepForm";
import { FormProvider } from "./context/FormContext";
// import { Main} from "@utsav2727/dynamic-multi-step-form";

export default function Home() {
  return (
    <div className="min-h-[120vh] md:min-h-[82vh] content-center bg-gradient-to-r from-indigo-100 to-blue-200">
    <FormProvider>
      <div className=" flex max-w-screen-lg m-auto items-center justify-center">
        <MultiStepForm />
      </div>
    </FormProvider>
    {/* <Main/> */}
    </div>
  );
}
