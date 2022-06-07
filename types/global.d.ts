type NonNullable<T> = Exclude<T, null | undefined>;

interface Timestamps {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface Product extends Timestamps {
  _id: string;
  productId: string;
  model?: string;
  carat: number;
  ppc?: number;
  color?: string;
  colorShade?: string;
  clarity?: string;
  clarityIndex?: number;
  measurement?: string;
  cut?: string;
  cutIndex?: number;
  lab?: string;
  price?: number;
  depth?: number;
  table?: number;
  milky?: string;
  pavilionHeight?: string;
  culetCondition?: string;
  girdle?: number;
  milkyInclusions?: string;
  blackInclusions?: string;
  whiteInclusions?: string;
  centerInclusions?: string;
  openInclusions?: string;
  tradeShow?: string;
  sarineName?: string;
  ploting?: string;
  timeToDelivery?: string;
  updatedPpc: number;
  updatedAt?: string;
  createdAt?: string;
  updatedPrice?: number;
  cashPrice?: string;
  cashDiscount?: string;
  centerInclusion?: string;
  starLength?: string;
  showOnlyOnRapLink?: string;
  parcelStones?: number;
  reportType?: string;
  reportIssueDate?: string;
  reportIssueLocation?: string;
  displayCertnumber?: string;
  pairStock?: string;
  discount: number;
  ratio?: number;
  treatment?: string;
  keyToSymbols?: string;
  girdleThin?: string;
  girdleThick?: string;
  fluorescent?: string;
  girdleCondition?: string;
  culetSize?: string;
  polish?: string;
  polishIndex?: number;
  location?: string;
  symmetry?: string;
  symmetryIndex?: number;
  fluorescenceIntensity?: string;
  fluorescenceIntensityIndex?: number;
  fluorescenceColor?: string;
  crownHeight?: string;
  crownAngle?: string;
  pavilionHigh?: string;
  pavilionDepth?: number;
  pavilionAngle?: number;
  laserInscription?: string;
  comment?: string;
  supplierComment?: string;
  certificateId?: string;
  certificateImage?: string;
  plottingImage?: string;
  inBucketUploadProcess?: boolean;
  diamondImage?: string;
  diamondImage2?: string;
  diamondImage3?: string;
  diamondImage4?: string;
  diamondImage5?: string;
  diamondImage360?: string;
  vendorStocknumber?: string;
  pairVendorStocknumber?: string;
  isMatchedPairSeparable?: boolean;
  fancyColor?: string;
  fancyColorIntensity?: string;
  fancyColorOvertone?: string;
  dimension?: string;
  status?: string;
  rapList?: string;
  rapAmount?: number;
  rapnetPrice?: number;
  rapnetPpc?: number;
  rapnetDiscount?: number;
  supplierDiscount?: number;
  rapnetId?: string;
  diamondStatus?: string;
  date?: string;
  availability?: string;
  shade?: string;
  measLength?: number;
  measWidth?: number;
  measDepth?: number;
  brand?: string;
  eyeClean?: string;
  city?: string;
  state?: string;
  country?: string;
  videoUrl?: string;
  diamondJourney?: string;
  giaCertificate?: string;
  giaPlotting?: string;
  piecesPerCarat?: number;
  avgSize?: number;
  giaDetails?: Object;
  colorType?: string;
  special?: string;
  typeToA?: boolean;
  typeToALink?: string;
  bidPrice?: number;
  companyIndex?: number;
  significant?: boolean;
  type?: string;
  uploadedAt?: string;
  isAvailable?: boolean;
  company?: any;
  markupPercent?: number;
  lucyPrice?: number;
  marketplace?: boolean;
  marketplaceLastStatus?: boolean;
  matchedDiamonds?: string;
  match?: string;
  listPrice?: number;
  tempGiaCertificateLink?: string;
  tempGiaPlottingLink?: string;
  diamondLabel?: "HIGH_DEMAND" | "NEW_IN_MARKET" | "SPECIAL_PRICE";
}

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  token: string;
  isSupplier: boolean;
  company: Company;
  approvedTerms: boolean;
  getLogin?: boolean;
}

interface Company extends Timestamps {
  _id: string;
  name: string;
  isTenderSupplier?: boolean;
  isSupplier?: boolean;
  aml?: GetAML;
  amlTenderStatus?: "pending" | "disapproved" | "approved" | "in-process";
  amlTender?: TenderAml[];
}

interface ApiError {
  message: string;
}

interface Base64File {
  name: string;
  data: string;
  size: number;
  type: string;
  dataWithoutType?: string;
}

interface GetAML {
  business: {
    companyName?: string;
    companyPhone?: string;
    faxNumber?: string;
    companyEmailAddress?: string;
    companyDate?: string;
    businessType?: string;
    companyAddress?: string;
    tradeNumber?: string;
  };
  admin: {
    adminFirstName?: string;
    adminLastName?: string;
    adminTaxNumber?: string;
    adminEmailAddress?: string;
    adminPhoneNumber?: string;
    adminFullAddress?: string;
  };
  firstReference: {
    nameOfCompany?: string;
    country?: string;
    contactPerson?: string;
    referencesPhoneNumber?: string;
    email?: string;
  };
  secondReference: {
    nameOfCompany?: string;
    country?: string;
    contactPerson?: string;
    referencesPhoneNumber?: string;
  };
  thirdReference: {
    nameOfCompany?: string;
    country?: string;
    contactPerson?: string;
    referencesPhoneNumber?: string;
  };
  files?: string[] | null;
  personal: {
    personalFirstName?: string;
    personalLastName?: string;
    personalEmailAddress?: string;
    personalPhoneNumber?: string;
    personalFullAddress?: string;
  };
}
