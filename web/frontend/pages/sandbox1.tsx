import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Sandbox() {
  return (
    <Page>
      <TitleBar
        title="Sandbox1!!"
        breadcrumbs={[{ content: "Home", url: "/" }]}
        primaryAction={{
          content: "Primary action",
          url: "/pagename",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
    </Page>
  );
}
