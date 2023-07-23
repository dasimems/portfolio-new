import PageContainer from "@/components/general/PageContainer";
import { Routes } from "@/utils/general";
import Link from "next/link";
import { ArrowLeft } from "react-iconly";

const ErrorContent = () => {
  return (
    <PageContainer className="flex flex-col items-center gap-5 py-6">
      <span className="px-5 py-1 text-xs font-medium rounded-md bg-primary-200 text-primary">
        404 error
      </span>
      <h1 className="text-xl font-bold text-center text-slate-600">
        We are sorry to inform you that
      </h1>

      <p className="max-w-[800px] text-slate-500">
        The page you&apos;re looking for isn&apos;t available or it has been
        moved
      </p>

      <Link
        href={Routes.Home.path}
        className="inline-flex items-center gap-2 font-bold text-primary"
      >
        <span>
          <ArrowLeft set="bold" />
        </span>
        <span>Back to home</span>
      </Link>
    </PageContainer>
  );
};

export default ErrorContent;
