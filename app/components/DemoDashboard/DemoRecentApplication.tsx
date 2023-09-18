import Image from 'next/image'

type Props = {
    img: string;
    alt: string;
    company: string;
    role: string;
    timeSince: string;
}

export default function RecentApplication(props: Props) {
    const { img, alt, company, role, timeSince } = props
    return (
        <li className="ml-2 pl-3 pb-3 sm:pb-4 bg-gray-100 mb-2 rounded-lg p-2">
            <div className="flex flex-1 items-center space-x-4">
            <div className="flex-shrink-0">
            <Image
                src={img}
                width={25}
                height={25}
                alt={alt}
                />
            </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                        {company}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                        {role}
                    </p>
                </div>
                <div className="pr-3 inline-flex items-center text-base font-semibold text-gray-900">
                    {timeSince}
                </div>
            </div>
        </li>
    )
}