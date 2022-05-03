import styled from "@emotion/styled";

export const EditorContainer = styled.div`
  .ql-editor {
    min-height: 200px;
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
  }

  .ql-container {
    border-radius: 0px 0px 10px 10px;
  }

  &.readonly {
    .ql-container {
      border-radius: 10px;
      border: none;
    }

    .ql-editor {
      padding: 0px;
    }
  }

  .ql-toolbar {
    border-radius: 10px 10px 0px 0px;
  }
`;
