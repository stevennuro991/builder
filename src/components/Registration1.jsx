import { Button, Col, Input, notification, Radio, Row } from "antd";
import React from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const options = [
  {
    label: "Supplier",
    value: "Supplier",
  },
  {
    label: "SubContractor",
    value: "SubContractor",
  },
  {
    label: "Realtor",
    value: "Realtor",
  },
];
const options1 = [
  {
    label: "Sand",
    value: "Sand",
  },
  {
    label: "Bucket",
    value: "Bucket",
  },
  {
    label: "Stones",
    value: "Stones",
  },
];
const options2 = [
  {
    label: "$/month",
    value: "$/month",
  },
  {
    label: "$/year",
    value: "$/year",
  },
  {
    label: "$/down",
    value: "$/down",
  },
];

export function Registration1() {
  const [api, contextHolder] = notification.useNotification();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [itemType, setitemType] = React.useState("");
  const [location, setlocation] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [serviceCharge, setServiceCharge] = React.useState("");
  const [roomType, setRoomType] = React.useState("");
  const [roleType, setRoleType] = React.useState("Supplier");
  const [loading, setLoading] = React.useState(false);


  const signInWithFirebase = () => {
  return signInWithEmailAndPassword(auth, email, password)
  // handle possible errors
}

  const createAccountFirebase = () => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential) {
        signInWithFirebase()
      }
    }).catch({
      // return error
    })
  }

  const openNotificationWithIcon = (type, message, title) => {
    api[type]({
      message: title ?? "This is a notification title",
      description:
        message ??
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  const saveData = async () => {
    const dataToSend = {
      name,
      roleType,
      email,
      itemType,
      location,
      phone,
      website,
      serviceCharge,
      roomType,
    };

    setLoading(true);

    let exist = false;

    let q = query(
      collection(db, "agent"),
      where("email", "==", dataToSend?.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      exist = true;
    });

    if (!exist) {
      await addDoc(collection(db, "agent"), dataToSend);
      openNotificationWithIcon("success", "Registration Successful", "Success");
    } else {
      openNotificationWithIcon(
        "error",
        "Email or Phone Number already exists",
        "Error"
      );
    }

    createAccountFirebase()
    setLoading(false);
  };



  return (
    <div className="flex w-full h-full">
      {contextHolder}
      <Row gutter={[16, 16]} className="w-full">
        <Col xs={24} sm={24} md={6}></Col>
        <Col xs={24} sm={24} md={10} className="pt-4">
          <div className="border-solid rounded-[15px] border-[#5ad935] border-[2px] p-5 min-h-[400px] bg-white">
            <Radio.Group
              options={options}
              optionType="button"
              buttonStyle="solid"
              onChange={(e) => {
                setRoleType(e.target.value);
              }}
              value={roleType}
            />

            <Row className="p-3" gutter={[12, 12]}>
              <Col span={12}>
                <label htmlFor="Name">Name</label>
                <Input
                  placeholder="Company Name"
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col span={12}>
                <label htmlFor="Email">Email</label>
                <Input
                  placeholder="Email"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>

            <Radio.Group
              options={options1}
              optionType="button"
              buttonStyle="solid"
              onChange={(e) => {
                setitemType(e.target.value);
              }}
              value={itemType}
            />
            <Col span={12}>
              <label htmlFor="Phone">Phone Number</label>
              <Input
                placeholder="Phone Number"
                name="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label htmlFor="Password">Password</label>
              <Input
                placeholder="Password"
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label htmlFor="Location">Location</label>
              <Input
                placeholder="Location"
                name="Location"
                onChange={(e) => setlocation(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label htmlFor="Website">Website</label>
              <Input
                placeholder="Website"
                name="Website"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label htmlFor="Service Charge">Service Charge</label>
              <Input
                placeholder="Service Charge"
                name="Service Charge"
                onChange={(e) => setServiceCharge(e.target.value)}
              />
            </Col>
            <Radio.Group
              options={options2}
              optionType="button"
              buttonStyle="solid"
              onChange={(e) => {
                setRoomType(e.target.value);
              }}
              value={roomType}
            />
            <br />
            <Button type="primary" onClick={saveData} loading={loading}>
              Submit
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8}></Col>
      </Row>
    </div>
  );
}
