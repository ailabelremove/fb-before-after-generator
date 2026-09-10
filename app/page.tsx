import { TemplateProvider } from "@/lib/TemplateContext";

export default function Home() {
  return (
    <TemplateProvider>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Step 2 done — Context & Types ready ✅
        </h1>
      </main>
    </TemplateProvider>
  );
}
