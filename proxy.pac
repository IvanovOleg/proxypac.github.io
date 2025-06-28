function FindProxyForURL(url, host)
{
    if (shExpMatch(host, "*.gc-va.ncbi.nlm.nih.gov"))
        return "PROXY localhost:3129";
    if (shExpMatch(host, "*.ocpprod-gcp-1.p2.ncbi.nlm.nih.gov"))
        return "PROXY localhost:3129";
    if (shExpMatch(host, "*.ocpprod-gcp-1.p2.ncbi.nlm.nih.gov"))
        return "PROXY localhost:3129";
    if (shExpMatch(host, "*.nih.gov"))
        return "PROXY localhost:3128";
    else
        return "DIRECT";
}
