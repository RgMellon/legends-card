type Props = {
  img: string;
  title: string;
  subtitle?: string;
};

export function Banner({ img, subtitle, title }: Props) {
  return (
    <div
      className="shadow-sm flex items-center rounded-md  mt-8 justify-between "
      style={{ background: 'rgba(223, 177, 96, 0.5)' }}
    >
      <div className="ml-8">
        <h2 className="font-bold text-4xl ">Melhores jogadores </h2>
        {!!subtitle && <p>{subtitle}</p>}
      </div>

      <div className="">
        <img src={img} alt={title} className="w-80 right-0" />
      </div>
    </div>
  );
}
