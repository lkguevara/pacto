import React from "react";
import EnConstruccion from "@/components/enConstruccion";
import { useRouter } from "next/router";

function producto() {
    const router = useRouter()
    const { producto } = router.query;
  return <div>
    <h1 style={{textAlign:'center'}}>Detail Product: {producto}</h1>
    <EnConstruccion/>

  </div>;
}

export default producto;
