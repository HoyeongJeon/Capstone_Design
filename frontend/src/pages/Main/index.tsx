import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Main() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="grid gap-y-8">
            <img
              src="src/logo/deepfake_logo.png"
              alt="logo"
              className="object-scale-down h-48 w-96"
            />
            <h1 className="text-4xl font-bold text-sky-600">
              프로젝트 이름 넣기
            </h1>

            <div className="grid gap-y-4">
              <form>
                <Label htmlFor="picture" className="font-bold text-lg">
                  동영상을 업로드하고 동영상의 진위여부를 판별하세요!
                </Label>
                <div className="flex">
                  <Input
                    id="picture"
                    type="file"
                    accept="video/*"
                    className="mr-1"
                  />
                  <Button variant="outline">업로드</Button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
