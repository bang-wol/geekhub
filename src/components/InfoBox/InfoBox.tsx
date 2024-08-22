import { twMerge } from 'tailwind-merge';

type InfoBoxProps = {
  theme: 'red' | 'primary' | 'gray';
  location?: boolean;
  bullet?: boolean;
  description: string[];
};

export default function InfoBox({ theme, location, bullet, description }: InfoBoxProps) {
  const themeClasses = {
    bg: {
      red: 'bg-red-light',
      primary: 'bg-purple-light',
      gray: 'bg-gray-light',
    },
    title: {
      red: 'text-system-warning',
      primary: 'text-primary-500',
      gray: 'text-[#3f3f3f]',
    },
    location: {
      red: 'border-system-warning text-system-warning border-[0.2rem]',
      primary: 'border-primary-500 text-primary-500 border-[0.2rem]',
      gray: 'border-[#3f3f3f] text-[#3f3f3f] border-[0.2rem]',
    },
    contentText: {
      gray: 'text-gray-default',
    },
  };

  return (
    <div className={twMerge(themeClasses.bg[theme], 'p-[2rem]', 'rounded-[1.2rem]')}>
      <div className="flex items-center gap-[0.8rem]">
        <h2 className={twMerge('text-[2.4rem] font-bold', themeClasses.title[theme])}>문제 코드</h2>
        {location && (
          <span
            className={twMerge(
              'rounded-full px-[0.6rem] py-[0.3rem] text-[1.6rem] font-bold',
              themeClasses.location[theme],
            )}
          >
            위치보기
          </span>
        )}
      </div>
      <div className={twMerge(theme === 'gray' && themeClasses.contentText.gray)}>
        <ul className="list-inside pl-0 text-[1.8rem]">
          {bullet ? <li className="list-disc">{description}</li> : <li>{description}</li>}
        </ul>
      </div>
    </div>
  );
}
