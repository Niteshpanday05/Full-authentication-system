interface HeroBadgeProps {
  text: string;
}

const HeroBadge = ({ text }: HeroBadgeProps) => {
  return (
    <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
      {text}
    </div>
  );
};

export default HeroBadge;