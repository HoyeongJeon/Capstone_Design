import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export default function Header() {
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSignUpNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpName(e.target.value);
  };

  const handleSignUpEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpEmail(e.target.value);
  };

  const handleSignUpPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpPassword(e.target.value);
  };

  const handleSignUpPasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpPasswordConfirm(e.target.value);
  };

  const handleLoginEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("accessToken", response.data.data.accessToken);
      location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          alert("이메일 또는 비밀번호가 일치하지 않습니다.");
          setLoginEmail("");
          setLoginPassword("");
        }
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const {
        data: {
          data: { data: accessToken },
        },
      } = await axios.post(
        "http://localhost:3000/auth/signup",
        {
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
          passwordConfirm: signUpPasswordConfirm,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("accessToken", accessToken);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="bg-white rounded-lg m-4 dark:bg-gray-800">
      <ul className="flex justify-between">
        <li className="mr-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="mr-2">
                소개
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>소개</AlertDialogTitle>
                <AlertDialogDescription>
                  이 웹사이트는 딥페이크 영상을 판별하는 웹사이트입니다. <br />
                  딥페이크 영상은 인공지능 기술을 이용해 만들어진 영상으로, 실제
                  사실과 다른 내용을 담고 있을 수 있습니다. <br /> 넘처나는 정보
                  속에서 진실을 찾아내기 위해 이 웹사이트를 이용해 보세요.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>닫기</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">이용약관</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>이용약관</AlertDialogTitle>
                <AlertDialogDescription>
                  본 사이트의 판별결과는 참고용으로만 사용하시기 바랍니다.
                  <br />본 사이트의 판별결과는 절대적인 진실을 보장하지
                  않습니다.
                  <br />
                  사이트 이용으로 인해 발생하는 모든 문제에 대해 책임지지
                  않습니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>닫기</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
        <li className="mr-3"></li>
        <li className="mr-3">
          {
            // 로그인 여부에 따라 다른 버튼을 보여준다.
            localStorage.getItem("accessToken") ? (
              <>
                <Button
                  variant="ghost"
                  className="inline-block py-2 px-4 text-gray-400"
                >
                  마이페이지
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="inline-block py-2 px-4 text-gray-400 mr-3"
                    >
                      로그아웃
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>로그아웃</AlertDialogTitle>
                      <AlertDialogDescription>
                        로그아웃 하시겠습니까?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>닫기</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          localStorage.removeItem("accessToken");
                          location.reload();
                        }}
                      >
                        로그아웃
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            ) : (
              <>
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
                          value={loginEmail}
                          onChange={handleLoginEmailChange}
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
                          value={loginPassword}
                          onChange={handleLoginPasswordChange}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleLogin}>로그인</Button>
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
                          이름
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="이름을 입력해주세요."
                          className="col-span-3"
                          value={signUpName}
                          onChange={handleSignUpNameChange}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          이메일
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="이메일을 입력해주세요."
                          className="col-span-3"
                          value={signUpEmail}
                          onChange={handleSignUpEmailChange}
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
                          value={signUpPassword}
                          onChange={handleSignUpPasswordChange}
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
                          value={signUpPasswordConfirm}
                          onChange={handleSignUpPasswordConfirmChange}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleSignUp}>회원가입</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </>
            )
          }
        </li>
      </ul>
    </header>
  );
}
