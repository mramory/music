import instance from "@/api";
import { TagsResponseType } from "@/api/top-albums/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";

interface TagSelectProps {
  setTag: React.Dispatch<React.SetStateAction<string>>;
  refetch: any
}

export const TagSelect = memo(({setTag, refetch}: TagSelectProps) => {

    const {data} = useQuery({
        queryKey: ["tags"],
        queryFn: () => instance.get<TagsResponseType>("", { params: { method: "chart.gettoptags", limit: 5} })
    })

    const changeTag = async (value: string) => {
      setTag(value)
      await refetch()
    }

  return (
    <Select onValueChange={changeTag}>
      <SelectTrigger className="w-[180px] mb-3 mt-2">
        <SelectValue placeholder="Выберите тег" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.data.tags.tag.map((el) => <SelectItem value={el.name}>{el.name}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
