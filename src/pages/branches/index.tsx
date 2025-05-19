import { useState } from "react";
import BranchTable from "../../components/Tables/branchTable";
import SearchBar from "../../components/searchBar";
import AddBranchModal from "../../components/modals/addBranchModal";
import UploadModal from "../../components/modals/uploadFileModal";
import ButtonIcon from "../../components/Buttons/buttonIcon";

export default function Branches() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mx-4 pb-2 border-b-[1px] border-(--border)">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Branches
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Add branches, view branches and edit branches.
          </h6>
        </div>
        <button onClick={() => setIsModal(true)}>
          {" "}
          <svg
            width="118"
            height="36"
            viewBox="0 0 118 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="117"
              height="35"
              rx="3.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="117"
              height="35"
              rx="3.5"
              stroke="#D0D5DD"
            />
            <path
              d="M24.4167 9.6665H24.644C27.3617 9.6665 28.7205 9.6665 29.6642 10.3314C29.9346 10.5219 30.1746 10.7478 30.377 11.0022C31.0834 11.8904 31.0834 13.1693 31.0834 15.7271V17.8483C31.0834 20.3176 31.0834 21.5523 30.6926 22.5384C30.0644 24.1237 28.7358 25.3741 27.0514 25.9654C26.0037 26.3332 24.6919 26.3332 22.0683 26.3332C20.569 26.3332 19.8194 26.3332 19.2207 26.123C18.2582 25.7851 17.499 25.0706 17.1401 24.1647C16.9167 23.6012 16.9167 22.8957 16.9167 21.4847V17.9998"
              stroke="#344054"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.0833 18C31.0833 19.5341 29.8397 20.7778 28.3056 20.7778C27.7507 20.7778 27.0966 20.6806 26.5572 20.8251C26.0779 20.9535 25.7035 21.3279 25.5751 21.8072C25.4306 22.3466 25.5278 23.0007 25.5278 23.5556C25.5278 25.0897 24.2841 26.3333 22.75 26.3333"
              stroke="#344054"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.75 11.7498C18.1596 11.3284 19.2498 9.6665 19.8333 9.6665M21.9167 11.7498C21.5071 11.3284 20.4169 9.6665 19.8333 9.6665M19.8333 9.6665V16.3332"
              stroke="#344054"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.948 19.916V14.324H44.124V19.844C44.124 21.236 44.892 22.004 46.272 22.004C47.64 22.004 48.396 21.224 48.396 19.844V14.324H49.584V19.916C49.584 21.908 48.312 23.144 46.272 23.144C44.22 23.144 42.948 21.92 42.948 19.916ZM51.3473 25.628V17.132H52.3673L52.4513 18.188C52.8473 17.384 53.6393 16.964 54.5753 16.964C56.2553 16.964 57.2993 18.224 57.2993 20.024C57.2993 21.812 56.3153 23.156 54.5753 23.156C53.6393 23.156 52.8593 22.76 52.4753 22.04V25.628H51.3473ZM52.4873 20.072C52.4873 21.272 53.1833 22.136 54.3353 22.136C55.4873 22.136 56.1713 21.272 56.1713 20.072C56.1713 18.86 55.4873 17.996 54.3353 17.996C53.1833 17.996 52.4873 18.848 52.4873 20.072ZM59.6946 23H58.5666V14.168H59.6946V23ZM60.9711 20.06C60.9711 18.248 62.2671 16.976 64.0311 16.976C65.7831 16.976 67.0791 18.248 67.0791 20.06C67.0791 21.872 65.7831 23.144 64.0311 23.144C62.2671 23.144 60.9711 21.872 60.9711 20.06ZM62.1111 20.06C62.1111 21.284 62.8911 22.136 64.0311 22.136C65.1591 22.136 65.9511 21.284 65.9511 20.06C65.9511 18.836 65.1591 17.984 64.0311 17.984C62.8911 17.984 62.1111 18.836 62.1111 20.06ZM70.0437 23.144C68.7837 23.144 68.0397 22.436 68.0397 21.368C68.0397 20.288 68.8437 19.616 70.2237 19.508L72.0717 19.364V19.196C72.0717 18.212 71.4837 17.864 70.6917 17.864C69.7437 17.864 69.2037 18.284 69.2037 18.992H68.2197C68.2197 17.768 69.2277 16.964 70.7397 16.964C72.1917 16.964 73.1757 17.732 73.1757 19.316V23H72.2157L72.0957 22.052C71.7957 22.724 70.9917 23.144 70.0437 23.144ZM70.3677 22.268C71.4357 22.268 72.0837 21.572 72.0837 20.468V20.156L70.5837 20.276C69.5877 20.372 69.1797 20.756 69.1797 21.332C69.1797 21.956 69.6357 22.268 70.3677 22.268ZM77.0899 23.144C75.3859 23.144 74.3539 21.872 74.3539 20.084C74.3539 18.284 75.3979 16.964 77.1379 16.964C78.0379 16.964 78.7939 17.36 79.1899 18.08V14.168H80.3059V23H79.2979L79.2019 21.932C78.8179 22.736 78.0259 23.144 77.0899 23.144ZM77.3179 22.124C78.4699 22.124 79.1779 21.272 79.1779 20.048C79.1779 18.848 78.4699 17.984 77.3179 17.984C76.1659 17.984 75.4939 18.848 75.4939 20.048C75.4939 21.26 76.1659 22.124 77.3179 22.124ZM89.9904 19.316H86.5824V23H85.4064V14.324H90.6384V15.404H86.5824V18.248H89.9904V19.316ZM92.4227 15.74C92.0147 15.74 91.6787 15.404 91.6787 14.996C91.6787 14.576 92.0147 14.252 92.4227 14.252C92.8307 14.252 93.1667 14.576 93.1667 14.996C93.1667 15.404 92.8307 15.74 92.4227 15.74ZM91.8707 23V17.132H92.9987V23H91.8707ZM95.7883 23H94.6603V14.168H95.7883V23ZM99.9808 23.144C98.2528 23.144 97.0648 21.896 97.0648 20.072C97.0648 18.236 98.2288 16.964 99.9328 16.964C101.601 16.964 102.693 18.116 102.693 19.856V20.276L98.1568 20.288C98.2408 21.524 98.8888 22.208 100.005 22.208C100.881 22.208 101.457 21.848 101.649 21.176H102.705C102.417 22.436 101.433 23.144 99.9808 23.144ZM99.9328 17.912C98.9488 17.912 98.3248 18.5 98.1808 19.532H101.565C101.565 18.56 100.929 17.912 99.9328 17.912Z"
              fill="#344054"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row mx-4 py-2 border-b-[1px] border-(--border)">
        <div className="w-full ">
          <SearchBar
            placeholder="Search Branch"
            className="h-[40px] md:w-[320px] w-full rounded-[8px] bg-white border-[1px] border-(--border)"
          />
        </div>
        <div className="flex items-center mt-4 md:mt-0 gap-[12px] flex-col md:flex-row w-full justify-end">
          <div className="w-full md:w-[120px]" onClick={() => setIsOpen(true)}>
            <ButtonIcon text="Add Branch" className="w-full md:w-[120px]" />
          </div>
          <button className="flex items-center justify-center h-[36px] lg:w-[157px] w-full rounded-[4px] border-[1px] border-(--border) satoshi-700 text-[12px] leading-[18px] text-[#344054]">
            <span></span>
            <h2>Update from Core</h2>
          </button>
        </div>
      </div>

      <div className="mt-4 mx-4">
        <BranchTable />
      </div>
      <AddBranchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <UploadModal isModal={isModal} onClose={() => setIsModal(false)} />
    </>
  );
}
