import { useLocation } from "react-router-dom";
import { details, ID_LIST } from "@/constants/entry";
import BasicLayout from "src/layouts/BasicLayout";
import styles from "./index.module.less";
const Result = () => {
  // 路由参数: name 为 测试名称  id 为 唯一标识，以id来取题目
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const result: { title: string; details: string } =
    details[(params.get("id") || "color_test") as ID_LIST].result[
      (Number(params.get("res")) || 0) as number
    ];
  return (
    <BasicLayout name={"测试结果"}>
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: result.title,
        }}
      />
      <div
        className={styles.detail}
        dangerouslySetInnerHTML={{
          __html: result.details,
        }}
      />
    </BasicLayout>
  );
};

export default Result;
