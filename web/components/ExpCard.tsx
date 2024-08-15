import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';

export default function ExpCard({
  title,
  location,
  dates,
  desc,
  image,
}: {
  title: string;
  location: string;
  dates: string;
  desc: string;
  image: React.ReactNode;
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      iconStyle={{
        background: 'rgb(255, 255, 255)',
        color: '#fff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        boxShadow: 'none',
      }}
      icon={image}
      contentStyle={{ background: 'white', boxShadow: 'none' }}>
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="vertical-timeline-element-title font-semibold">
          {title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">{location}</h4>
        <h3 className="font-light">{dates}</h3>
        <h3 className="mt-2 font-normal">{desc}</h3>
      </div>
    </VerticalTimelineElement>
  );
}
