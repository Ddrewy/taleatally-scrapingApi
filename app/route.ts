import { NextResponse } from "next/server";

interface Resp {
  name: String,
  weight: String
}

export async function GET(request: Request) {
  let respArr: Resp[] = [];
  const req = await request.json();
  const {course, term} = req; 
  const year:number = new Date().getFullYear();
  const resp = await fetch(`https://courseoutlines.unsw.edu.au/v1/publicsitecourseoutlines/detail?year=${year}&term=Term+${term}&deliveryMode=Multimodal&deliveryFormat=Standard&teachingPeriod=T${term}&deliveryLocation=Kensington&courseCode=${course}&activityGroupId=1`);
  const res:JSON = JSON.parse(resp); 

  for (let i : res.integrat_CO_Assesment) {
    respArr[i].name = res.integrat_CO_Assesment.i.integrat_title;
    respArr[i].weight = res.integrat_CO_Assesment.i.integrat_weight;
  }

  return new Response();
}
