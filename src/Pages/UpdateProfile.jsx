import { HiArrowLeft } from "react-icons/hi";
import EditProfileForm from "../features/user/EditProfileForm";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 mt-4">
      <Button
        className="flex items-center gap-3 font-medium capitalize"
        handler={() => navigate(-1)}
      >
        <HiArrowLeft /> back
      </Button>
      <EditProfileForm />
    </div>
  );
}

export default UpdateProfile;
