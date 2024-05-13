import { StageModel } from '../domain/usecases/FetchStages';

type Props = {
  handleSelectHomeStage: (target: string) => void;
  stages: StageModel[];
  selectedHomeStage: string;
};

export function SelectStage({
  handleSelectHomeStage,
  selectedHomeStage,
  stages,
}: Props) {
  return (
    <select
      onChange={(event) => {
        handleSelectHomeStage(event.target.value);
      }}
      id="stage"
      name="stage"
      className="mt-4
        w-full
        h-14
        rounded-md 
        pl-2
        pr-3 
        text-gray-500
      bg-purple-200 
        border-yellow
        border-solid
        border-opacity-10
        border-2
        outline-none"
    >
      {stages.map((stage) => (
        <option
          selected={
            stages[
              stages.findIndex(
                (stageIndex) => stageIndex.id === selectedHomeStage
              )
            ]?.id === stage.id
          }
          key={stage?.id}
          value={stage?.id}
        >
          {stage.slug.substring(0, 1).toUpperCase() + stage.slug.substring(1)}
        </option>
      ))}
    </select>
  );
}
