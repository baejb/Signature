import SignatureCanvas from "../components/SignatureCanvas";

export default function SignaturePage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        서명을 그리고 저장해보세요!
      </h2>
      <SignatureCanvas />
    </div>
  );
}
