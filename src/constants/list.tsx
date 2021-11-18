export interface BlogInfo {
  title: string;
  subtitle: string;
  date: string;
  thumbnail: string;
  file: string;
  tags: string[];
}

export const blogList: BlogInfo[] = [
  {
    title: "test용 블로그 포스팅",
    subtitle: "테스트용입니다. 중국어로 나와도 불편하게 봐주시지 말아주세요.",
    date: "2021-11-18",
    thumbnail: "",
    file: "2021-03-29-테스트",
    tags: ["iOS"],
  },
];
