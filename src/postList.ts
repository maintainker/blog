interface postInfo {
  title: string;
  file: string;
  subtitle: string;
  date: string;
  tags: string[];
}

const postList: postInfo[] = [
  {
    title: "테스트용 임시",
    file: "/post/2021-03-29-테스트.md",
    subtitle: "테스트용 임시파일입니다.",
    date: "2021-05-06",
    tags: ["test1", "test2"],
  },
];
export default postList;
