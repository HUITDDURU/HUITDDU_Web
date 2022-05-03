import dynamic from "next/dynamic";
import { FC, memo } from "react";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import * as S from "./styles";

const QuillWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface PropsType {
  value?: string;
  onChange?: ((value: string) => void) | undefined;
  placeholder?: string;
  readOnly?: boolean;
}

const Editor: FC<PropsType> = ({ value, onChange, placeholder, readOnly }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],

        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],

        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }],
        [{ align: [] }],

        ["clean"],
      ],
    }),
    []
  );

  return (
    <S.EditorContainer className={readOnly ? "readonly" : ""}>
      <QuillWrapper
        readOnly={readOnly}
        placeholder={placeholder}
        theme="snow"
        modules={readOnly ? { toolbar: false } : modules}
        value={value || ""}
        onChange={(_, _1, _2, e) => {
          if (onChange) {
            onChange(e.getHTML());
          }
        }}
      />
    </S.EditorContainer>
  );
};

Editor.displayName = "Editor";

export default memo(Editor);
