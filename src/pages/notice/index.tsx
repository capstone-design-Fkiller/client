import { TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useState } from "react";

import * as Styled from "./style";

import PageTemplate from "@/components/common/PageTamplate";
import CustomPagination from "@/components/common/Pagination";

const notices = [
  {
    id: 1,
    major: "태국",
    title: "사물함 신청 안내",
    date: "230505",
    content:
    "사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.",
  },
  {
    id: 2,
    major: "태국",
    title: "사물함 신청 안내",
    date: "230505",
    content:
    "사물함 이용 중 사물함 내 물품 분실에 대한 모든 책임은 사용자에게 있다. ※ 사물함에 귀중품은 보관하지 마세요.",
  },
  {
    id: 3,
    major: "한국",
    title: "기말고사 일정",
    date: "230504",
    content:
    "2023학년도 1학기 기말고사 일정이 아래와 같이 안내됩니다. - 6월 12일(일) 9:00 ~ 12:00 중간고사 - 6월 22일(수) 14:00 ~ 16:00 기말고사 (1, 2학년) - 6월 24일(금) 14:00 ~ 16:00 기말고사 (3학년)",
  },
  {
    id: 4,
    major: "일본",
    title: "강의실 변경 안내",
    date: "230503",
    content:
    "5월 4일(수) 중앙강의실 3에서 열리는 일본어 수업은 6월 6일(월)부터 중앙강의실 5에서 열리게 됩니다.",
  },
  {
    id: 5,
    major: "중국",
    title: "한자 시험 안내",
    date: "230502",
    content:
    "5월 14일(토)에 중국어 한자 시험이 있습니다. 시험 시간은 9:00 ~ 12:00이며, 시험 장소는 중앙강의실 1입니다.",
  },
  {
    id: 6,
    major: "중국",
    title: "한자 시험 안내",
    date: "230502",
    content:
    "5월 14일(토)에 중국어 한자 시험이 있습니다. 시험 시간은 9:00 ~ 12:00이며, 시험 장소는 중앙강의실 1입니다.",
  },
  ];

const pageSize = 5;

const NoticePage = () => {
    const [page, setPage] = useState(1);
    const handleChangePage = (event:React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    }

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const noticesToShow = notices.slice(startIndex, endIndex);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>NOTICE</Styled.Title>
        <Styled.Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>학과</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>작성일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {noticesToShow.map((notice) => (
              <TableRow key ={notice.id}>
                <TableCell>{notice.id}</TableCell>
                <TableCell>{notice.major}</TableCell>
                <TableCell>{notice.title}</TableCell>
                <TableCell>{notice.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Styled.Table>
        <CustomPagination
          count={Math.ceil(notices.length / pageSize)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          />
      </Styled.Root>
    </PageTemplate>
  );
};

export default NoticePage;
