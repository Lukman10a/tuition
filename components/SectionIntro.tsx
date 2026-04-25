import React from "react";

type SectionIntroProps = {
  badge: string;
  title: string;
  description?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
};

export default function SectionIntro({
  badge,
  title,
  description,
  badgeClassName = "bg-accent-teal/10 text-accent-teal",
  titleClassName = "text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6",
  descriptionClassName = "text-xl text-text-secondary leading-relaxed max-w-3xl",
  className = "mb-12",
}: SectionIntroProps) {
  return (
    <div className={className}>
      <span
        className={`inline-block px-4 py-2 rounded-full font-semibold text-sm mb-4 ${badgeClassName}`}
      >
        {badge}
      </span>
      <h2 className={titleClassName}>{title}</h2>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}
