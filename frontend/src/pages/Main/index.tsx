import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormEvent, useRef, useState } from "react";
import axios from "axios";

export default function Main() {
  const [video, setVideo] = useState<File | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideo(file);
    }
  };

  const uploadFile = async (e: FormEvent) => {
    e.preventDefault();
    if (!video) {
      alert("비디오를 선택해주세요.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("video", video);

      const res = await axios.post(
        "http://localhost:3000/videos/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        alert("비디오 업로드 성공");
        formData.delete("video");
        setVideo(null);
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {}
  };
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
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                  <Button variant="outline" onClick={uploadFile}>
                    업로드
                  </Button>
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
