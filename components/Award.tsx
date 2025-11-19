import AwardsStrip from './AwardsStrip';

// Sample awards data
const sampleAwards = [
  {
    id: 1,
    title: "Best Design Award",
    organization: "Design Association",
    year: "2024",
    // Uses default SVG from professionalIcons array
  },
  {
    id: 2,
    title: "Innovation Excellence",
    organization: "Tech Council",
    year: "2023",
    icon: "M12 2l1.5 4.5H18l-3.5 3-1.5 4.5-1.5-4.5L6 6.5h4.5L12 2z",
    iconType: "svg"
  },
  {
    id: 3,
    title: "Quality Achievement",
    organization: "Industry Standards",
    year: "2024",
    icon: "/images/certificate-icon.svg", // or any image URL
    iconType: "image"
  }
];

// In your component
export default function AwardsSection() {
  return (
    <section>
        
        <AwardsStrip awards={sampleAwards} speed={40} />
    </section>
  );
}