import React from "react";
import { Header } from "../components/Header/Header";

export const PageWrapper = (props:{children:any}) => {
  
  return (
		<>
		<Header />
		<div id="content">
			{props.children}
		</div>
		</>
  );
}