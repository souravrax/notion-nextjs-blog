export type NotionPageMetadata = {
  last_edited_time: string;
  created_time: string;
  properties: {
    Status: {
      id: string;
      type: string;
      status: {
        id: string;
        name: string;
        color: string;
      };
    };
    Date: {
      id: string;
      type: string;
      date: {
        start: string;
        end: any;
        time_zone: any;
      };
    };
    Tags: {
      id: string;
      type: string;
      multi_select: Array<{
        id: string;
        name: string;
        color: string;
      }>;
    };
    Title: {
      id: string;
      type: string;
      title: Array<{
        type: string;
        text: {
          content: string;
          link: any;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: any;
      }>;
    };
  };
};
