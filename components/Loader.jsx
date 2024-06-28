import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={392}
    height={807}
    viewBox="0 0 392 807"
    backgroundColor="#ededed"
    foregroundColor="#dedede"
    {...props}
  >
    <Rect x="15" y="18" rx="4" ry="4" width="174" height="16" /> 
    <Rect x="15" y="44" rx="4" ry="4" width="234" height="16" /> 
    <Rect x="15" y="84" rx="4" ry="4" width="367" height="51" /> 
    <Rect x="142" y="153" rx="4" ry="4" width="108" height="104" /> 
    <Rect x="15" y="271" rx="4" ry="4" width="108" height="104" /> 
    <Rect x="142" y="271" rx="4" ry="4" width="108" height="104" /> 
    <Rect x="274" y="269" rx="4" ry="4" width="108" height="104" /> 
    <Rect x="15" y="399" rx="4" ry="4" width="365" height="147" /> 
    <Rect x="15" y="723" rx="4" ry="4" width="365" height="79" /> 
    <Rect x="15" y="560" rx="4" ry="4" width="365" height="147" /> 
    <Rect x="15" y="153" rx="4" ry="4" width="108" height="104" /> 
    <Rect x="274" y="154" rx="4" ry="4" width="108" height="104" />
  </ContentLoader>
);

export default Loader;
