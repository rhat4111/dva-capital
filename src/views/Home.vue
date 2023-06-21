<template>
  <div class="home">
    <Banner />
    <OurFunds />
    <HowDoesItWork />
    <Portfolio />
    <Clients />
    <WhyDVA />
    <Sponsors />
  </div>
</template>

<script>
import Banner from "@/components/home/Banner";
import Clients from "@/components/home/Clients";
import HowDoesItWork from "@/components/home/HowDoesItWork";
import OurFunds from "@/components/home/OurFunds";
import Portfolio from "@/components/home/Portfolio";
import Sponsors from "@/components/home/Sponsors";
import WhyDVA from "@/components/home/WhyDVA";

export default {
  components: {
    Banner,
    Clients,
    HowDoesItWork,
    OurFunds,
    Portfolio,
    Sponsors,
    WhyDVA
  }
};
</script>
