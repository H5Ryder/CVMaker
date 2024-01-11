import { v4 as uuidv4 } from "uuid";





const personalTom = {
    fullName: "Tom McArthur (This is an example)",
    email: "trmcarthur97@gmail.com",
    phoneNumber: "+44 7482056636",
    address: "London, United Kingdom",
    portfolioLink: "www.trmc.com",
  };


const educationTom = [
  {
    id: uuidv4(),
    school: "University of Cambridge",
    degree: "BA Economics",
    dateStart: "Oct 2015",
    dateEnd: "Jun 2018",
    results: "Part IIA 1st, Part IIB 2:1 (68%)",
    activities: "Vice President and Trustee / Director of the Cambridge Union",
  },
  {
    id: uuidv4(),
    school: "The Royal High School, Edinbourgh",
    degree: "",
    dateStart: "Aug 2009",
    dateEnd: "Jun 2015",
    results:
      "Advanced Highers: AAA (all at Band 1); Higher: AAAAA (all at Band 1)",
    activities: "Vice President and Trustee / Director of the Cambridge Union",
  },
];




//Template objects
//d1-d6 Plentific Responsibilties
    let d1 = {
      data: "Building our revenue model for 2024, modelling potential growth in new and existing customers to establish our revenue targets",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let d2 = {
      data: "Close collaboration with the Sales and Customer Success teams to drive effective pipelinemanagement, managing our CRM to:",
      id: uuidv4(),
      children: [
        {
          data: "Understand deal activity through the sales cycle",
          id: uuidv4(),
        },
        { data: "Ensure pipeline hygiene", id: uuidv4() },
        { data: "Inform revenue forecasts", id: uuidv4() },
        { data: "Analyse sales team performance", id: uuidv4() },
      ],
    };
    let d3 = {
      data: "General deal support, e.g. with pricing, proposals and contracting",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let d4 = {
      data: "Managing our operational cadence within the Commercial organisation e.g. strategic account reviews, monthly / quarterly business reviews - providing required data and analysis",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let d5 = {
      data: "Developing and implementing sales processes for Commercial teams to maximise efficiency across the Commercial organisation",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let d6 = {
      data: "Regular reporting to senior leadership on the progress of our go-to-market plan and forecasts across three countries (UK, US, DE)",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
  //OCC Responsiblities 
    let o1 = {
      data: "Market, financial and business modelling and analysis",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let o2 = {
      data: "Primary (interview, survey) and secondary (desk-based) research",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let o3 = {
      data: "Competitor benchmarking and Management of more junior team members",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let o4 = {
      data: "Pricing and distribution strategy for major theme park group in Dubai",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let o5 = {
      data: "Strategic review of €3bn business unit of global FMCG player",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let o6 = {
      data: "Commercial due diligence of the AA",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let o7 = {
      data: "Strategic review of Spanish division of major European discount retailer",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };
    let o8 = {
      data: "Strategic review of British contact centre software reseller and systems integrator",
      id: uuidv4(),
      children: [{ data: "", id: uuidv4() }],
    };

    const experienceTom = [
      {
        id: uuidv4(),
        company: "Plentific",
        position: "Go-To-Market Manager",
        dateStart: "Feb 2023",
        dateEnd: "Present",
        location: "London",
        summary:
          "Manager in the Commercial Operations team at Plentific, a property technology SaaS scale-up (raised $100m at Series C).",
        description: [d1, d2, d3, d4, d5, d6],
      },
      {
        id: uuidv4(),
        company: "OC&C Strategy Consultants",
        position: "Senior Associate Consultant",
        dateStart: "March 2021",
        dateEnd: "Aug 2022",
        location: "London",
        summary:
          "",
        description: [
          { data: "", id: uuidv4(), children: [{ id: uuidv4, data: "" }] },
        ],
      },{
        id: uuidv4(),
        company: "OC&C Strategy Consultants",
        position: "Associate Consultant",
        dateStart: "March 2019",
        dateEnd: "March 2021",
        location: "London",
        summary:
          "Strategy consultant at a leading UK consultancy; worked on 20+ strategy and commercial due diligence projects across the retail, leisure FMCG, B2B services and TMT sectors.",
        description: [o1,o2,o3,o4,o5,o6,o7,o8
        ],
      }
    ];

    const skillsTom = {
      certs: "Truck Driving, PADI Masters",
      skills: "Strategic planning; recruiting; PnL modeling; inventory forecasting; brand identity maps; negotiations; Amazon marketing; DTC acquisition & retention marketing; copywriting; logistics; crowdfunding",
      interests: "comedy; weightlifting; composting; yoga; traveling; fishing; Reddit; Seinfeld"
    }

export const tomData = {
  personal: personalTom,
  education: educationTom,
  experience: experienceTom,
  skills: skillsTom
}



  


