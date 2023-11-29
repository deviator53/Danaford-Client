import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { featuresData, teamData, serviceData } from "@/data";

import { Footer, PageTitle } from "@/widgets/layout";

export function AboutUs() {
  return (
    <>
    <div className="w-full">
    <section className="relative w-full h-[30vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-100" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
     <section className="relative bg-white">
        <div className="container mx-auto my-4">
          <PageTitle  heading="About Us">
          Established in 2019, Danaford Global Limited is a reputable firm dedicated to providing full cycle software development and outsourcing, training, supply and General services.
          <br/>
          <br/>
          Our clients span a number of industries, including government, education, financial institutions, telecommunication providers, Small and Medium Businesses (SMBs) and enterprise
          </PageTitle>
          
          
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
      </div>
    </>
  );
}

export default AboutUs;
