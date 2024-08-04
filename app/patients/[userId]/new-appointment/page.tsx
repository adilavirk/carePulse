import { AppointmentForm } from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        {/* Image */}
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          {/* Form */}
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          {/* Text */}

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              @carepulse copyright
            </p>
          </div>
        </div>
      </section>
      {/* Render our big Image */}
      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
