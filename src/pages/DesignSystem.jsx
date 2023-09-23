import React from "react";

import Header from "../components/molecules/Header";
import Sticker from "../components/atoms/Sticker";
import Impression from "../components/atoms/Impression";
import Label from "../components/atoms/Label";

const DesignSystem = () => {
  return (
    <>
      <Header></Header>
      <div className="page">
        <table>
          <tr>
            <td>Stickers</td>
            <td>Impressions</td>
            <td>Labels</td>
          </tr>
          <tr>
            <td>
              <Sticker type="atf"></Sticker>
            </td>
            <td>
              <Impression type="loved"></Impression>
            </td>
            <td>
              <Label type="Biography"></Label>
            </td>
          </tr>
          <tr>
            <td>
              <Sticker type="yf"></Sticker>
            </td>
            <td>
              <Impression type="liked"></Impression>
            </td>
            <td>
              {" "}
              <Label type="Comics & Graphic Novels"></Label>
            </td>
          </tr>
          <tr>
            <td>
              <Sticker type="rr" data="2"></Sticker>
            </td>
            <td>
              <Impression type="disliked"></Impression>
            </td>
            <td>
              {" "}
              <Label type="Crime & Thrillers"></Label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Education"></Label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Fiction & Literature"></Label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Kids"></Label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Non-Fiction"></Label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Religion & Spirituality"></Label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Romance"></Label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Sci-Fi & Fantasy"></Label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Travel & Adventure"></Label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="Young Adult"></Label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Label type="LGBTQ"></Label>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default DesignSystem;
