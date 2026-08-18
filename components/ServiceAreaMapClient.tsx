"use client";

import dynamic from "next/dynamic";

const ServiceAreaMap = dynamic(() => import("@/components/ServiceAreaMap"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[4/3] w-full border border-border bg-surface md:aspect-[16/10]" />
  ),
});

export default ServiceAreaMap;
