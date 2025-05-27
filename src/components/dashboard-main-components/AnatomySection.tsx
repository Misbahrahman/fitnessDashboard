import { Heart } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="anatomy-image-card">
      <div className="anatomyImage">
        <img 
         src="/human-body-frontal.png" 
          alt="Human Anatomy" 
          className="human-body"
        />
        <div className="healty-heart">
          <Heart className='heart-icon' />
          <span>Healthy Heart</span>
        </div>
        <div className="healty-leg">
          <span>🦵 Healthy Leg</span>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;