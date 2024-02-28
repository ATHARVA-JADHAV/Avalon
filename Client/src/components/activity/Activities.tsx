import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import "./activity.css";
import { db, auth } from "../../firebase";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { useHistory } from "react-router-dom";

// Define an interface for an activity
interface Activity {
  id: string;
  title: string;
  description: string;
  // Add any other fields you expect in an activity
}

const Activities = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Use the Activity interface to type the activities state
  const [activities, setActivities] = useState<Activity[]>([]);
  // const history = useHistory();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivityData = () => {
      const activitiesRef = collection(db, "Activities");
      const unsubscribe = onSnapshot(activitiesRef, (snapshot) => {
        const activityList: Activity[] = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Activity)
        ); // Cast the object to Activity
        setActivities(activityList);
      });

      return () => unsubscribe();
    };

    fetchActivityData();
  }, []);

  const createRoom = async () => {
    try {
      const docRef = await addDoc(collection(db, "Activities"), {
        title: title,
        description: description,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setDescription("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleJoinNow = async (activityId: string) => {
    const user = auth.currentUser; // get the current user

    if (!user) {
      console.log("No user is signed in.");
      return;
    }

    console.log("Joining activity with ID: ", activityId);
    // Update the document with id: activityId
    const docRef = doc(db, "Activities", activityId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const activityData = docSnap.data();
      await updateDoc(docRef, {
        participants: [...activityData.participants, user.uid], // append current user's uid
      });
    } else {
      console.log("No such document!");
    }

    // history.push(`/activity/${activityId}`); // navigate to activity with activityId
  };
  const handleActivity = () => {
    navigate("/activity-page");
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center h-screen   m-10"
      id="main"
    >
      <div className="main-activities overflow-auto w-4/5  ">
        <h1 className="text-3xl font-sans m-4 font-bold w-4/5 ">Activities</h1>
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Create New</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Create a Activity</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <div className="form">
                  <div className="space-y-2">
                    <Label htmlFor="title ">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter activity title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2" id="desc">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      placeholder="Enter activity description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <Button id="createbutton" onClick={createRoom}>
                    Create
                  </Button>
                </div>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="activities-list w-full">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="activity shadow m-2 p-4 w-full rounded-md"
              id="activity-card"
            >
              <div className="internal">
                <h2>{activity.title}</h2>
                <p>{activity.description}</p>
              </div>

              <Button id="joinbutton" onClick={handleActivity}>
                Join Now
              </Button>
              {/* <p>{activity.location}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
