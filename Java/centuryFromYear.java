int centuryFromYear(int year) {
    int res =  (int) Math.ceil((double) year / 100);
    return res;
}
