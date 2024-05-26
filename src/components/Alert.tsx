type Props = {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
  alertMessage: string;
};

export function Alert({ title, alertMessage, onConfirm, onCancel }: Props) {
  return (
    <>
      <div
        className="w-full fixed right-0 top-0 flex bottom-0 transform backdrop-blur-md transition-all duration-300 ease-in-out -translate-x-1/2 left-1/2 z-10"
        style={{ backgroundColor: 'rgba(54, 52, 71, 0.3)' }}
      ></div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
        <div className="bg-purple-200 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full py-3">
          <div className="bg-purple-100 p-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {title}
            </h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500">{alertMessage}</p>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onConfirm}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Remover
            </button>
            <button
              onClick={onCancel}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
