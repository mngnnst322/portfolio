// Боловсрол. Хугацаа / дэлгэрэнгүйг [хашилтаар] тэмдэглэсэн — бодит утгаар солино уу.

export type EducationItem = {
  school: string;
  program: string;
  period: string | null;
  note?: string;
};

export const education: EducationItem[] = [
  {
    school: "Pinecone Academy",
    program: "Full-stack web хөгжүүлэлт",
    period: null,
    note: "Дадлагын хугацаанд Pinecone Studio-гийн багт Нүүдэлчин (2D тоглоом) төслийг хийсэн.",
  },
];
