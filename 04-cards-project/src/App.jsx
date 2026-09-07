import Card from "./component/Card.jsx"
const App = () => {
const jobs = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    company: "Amazon",
    date: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$25/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    company: "Google",
    date: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    company: "Microsoft",
    date: "1 day ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$35/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    company: "Apple",
    date: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    company: "Meta",
    date: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$40/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    company: "NVIDIA",
    date: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    company: "Tesla",
    date: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    company: "IBM",
    date: "3 days ago",
    post: "Cloud Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$30/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    company: "Oracle",
    date: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$27/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=samsung.com&sz=128",
    company: "Samsung",
    date: "5 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$34/hour",
    location: "HP, India",
    apply: "Apply Now",
  },
];

  return (
    <div className="parent">
      {jobs.map(function ( elem,index) {
        return <div key = {index}>
          <Card
            brandLogo={elem.brandLogo}
            company={elem.company}
            post={elem.post}
            date={elem.date}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
            apply={elem.apply}
          />
          </div>
      })}
    </div>
  );
};

export default App;
