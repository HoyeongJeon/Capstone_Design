import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const results = [
  {
    number: "1",
    fileName: "Obama.mp4",
    date: "2024-05-24 13:30",
    result: "65%",
  },
];

export default function MyPage() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="text-2xl text-neutral-700">분석 기록 조회</div>
        <main className="flex flex-col items-center justify-center  w-full flex-1 px-20 text-center">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">번호</TableHead>
                <TableHead className="text-center">파일 명</TableHead>
                <TableHead className="text-center">조회 일시</TableHead>
                <TableHead className="text-right">분석 결과</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.number}>
                  <TableCell className="font-medium">{result.number}</TableCell>
                  <TableCell>{result.fileName}</TableCell>
                  <TableCell>{result.date}</TableCell>
                  <TableCell className="text-right">{result.result}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
        <Footer />
      </div>
    </>
  );
}
