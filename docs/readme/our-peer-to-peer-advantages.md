---
description: >-
  We represent the Decentralized Nature, in which Society and Economy is
  embedded.
---

# Our Peer-to-Peer Advantages

If all stakeholders state mainly what they have direct knowledge (and proof) about, then misinformation and pointing fingers at each other can be prevented.

As things evolve, these information chunks reference each other, so the right information can still be always available, with improved accuracy.

This shared knowledge graph should be stored on a [decentralized infrastructure](https://www.ethswarm.org/), because

1. should be available to every stakeholder, to be used as the Single Source of Truth, therefore keep it updated
   1. at the same time, we provide unrivalled privacy for encrypted attributes: you can set conditions who should be able to decrypt (like current owners or license holders)
2. nobody should be able to censor or delete it
   1. ..not even "system admins" or shareholders of the provider
   2. once uploaded, our data is available as long as its "postage stamp" is funded
3. nobody should be able to manipulate it
   1. even adding a space or modifying any character alters its _keccak_ hash, which is used for retrieval
4. and of course, protection from electromagnetic pulses, physical damages, single point of failure, hacking attacks, etc.

## Trustless? Sure, you can verify!

### Is the uploaded data unaltered?

On DevTools' Network tab, check the underlying API call's Response. Use its `swarmReference` attribute to match the data in any Swarm Gateway (an _official_ is [https://gateway.ethswarm.org/access](https://gateway.ethswarm.org/access) ).

### Are the right attributes linked to my NFT listing?

Check in a block explorer, like the open-source [Blockscout](https://gnosis-chiado.blockscout.com/token/0x1162813F9e8946196f3302E33D485F4f81e970e6). Find the minting transaction, check _swarmHash_ (arg 2) in its input data. [Convert that uint32 to hex/Bytes32 format](https://uint256.net/docs/converter), copy it after 0x and use for retrieval from any Swarm Gateway.

### Are the right attributes loaded into our insights?

Combine the above methods! On DevTools' Network tab, compare what we GET from our Swarm node with the _tokenId_ and _swarmHash_ on a Blockchain explorer.
