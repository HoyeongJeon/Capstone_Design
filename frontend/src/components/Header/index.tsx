import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Header() {
  const handleLogin = async () => {
    const res = await axios.post();
  };
  return (
    <header className="bg-white rounded-lg m-4 dark:bg-gray-800">
      <ul className="flex justify-between">
        <li className="mr-3">
          <div className="inline-block border border-gray-300 rounded py-2 px-4 hover:bg-gray-300 hover:text-white text-black mr-3">
            소개
          </div>
          <div className="inline-block border border-gray-300 rounded py-2 px-4 hover:bg-gray-300 hover:text-white text-black">
            이용안내
          </div>
        </li>
        <li className="mr-3"></li>
        <li className="mr-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="inline-block py-2 px-4 text-gray-400 mr-3"
              >
                로그인
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>로그인</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력해주세요."
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    비밀번호
                  </Label>
                  <Input
                    id="password"
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={() => console.log("hello")}>
                  로그인
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="inline-block py-2 px-4 text-gray-400"
              >
                회원가입
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>회원가입</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력해주세요."
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    비밀번호
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="passwordConfirm" className="text-right">
                    비밀번호 확인
                  </Label>
                  <Input
                    id="passwordConfirm"
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">회원가입</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </li>
      </ul>
    </header>
  );
}
