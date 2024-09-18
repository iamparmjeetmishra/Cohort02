import { avatarWord, CapitalizeFirstWord, ToLocaleDate } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Link } from "react-router-dom";

type BlogCardProps = {
	authorName: string;
	title: string;
	content: string;
	publishedDate: Date;
	id: string;
};

export default function BlogCard({
	id,
	authorName,
	title,
	content,
	publishedDate,
}: BlogCardProps) {
	return (
		<div className="border-b py-4">
			<div className="flex items-center gap-2">
				<Avatar>
					<AvatarFallback>{avatarWord(authorName)}</AvatarFallback>
				</Avatar>
				<small>{ToLocaleDate(publishedDate)}</small>
			</div>
			<Link to={`/blog/${id}`}>
				<h2 className="font-semibold text-2xl">{CapitalizeFirstWord(title)}</h2>
			</Link>
			<p className="opacity-70">{CapitalizeFirstWord(content)}</p>
			<small className="opacity-65 text-xs">{` ${Math.ceil(content.length / 100)} minutes`}</small>
		</div>
	);
}
