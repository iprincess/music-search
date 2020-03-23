import React from "react";
import { Header } from "../components/Header/Header";

export const PageWrapper = (props:{children:any}) => {
  
  return (
    <>
		<div className="app">
		<Header />
			<div id="content">
				{props.children}
			</div>
		</div>
		</>
  );
}