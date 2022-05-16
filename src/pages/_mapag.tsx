import React from "react";
import Layout from "@theme/Layout";

export default function MyPage(): JSX.Element {
  return (
    <Layout 
      title="Моя страничка"
      description="Первая страничка на React TS">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          А ну-ка давай-ка!
        </p>
      </div>
    </Layout>
  );
}